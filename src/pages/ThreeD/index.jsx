import React,{useRef,useEffect} from 'react';



import { Empty,Space,Message,Card,Link,Grid, Divider } from '@arco-design/web-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const Row = Grid.Row;
const Col = Grid.Col;

export default function ThreeD() {
        const threeDom = useRef(null);
        //初始化
        //场景
        const scene = new THREE.Scene();
        //相机
        const camera = new THREE.PerspectiveCamera(
          50, 
          window.innerWidth / window.innerHeight, 
          0.1, 
          1000 
        );
        //加载器
        const renderer = new THREE.WebGLRenderer();
        //轨道控制器
        const controls = new OrbitControls(camera, renderer.domElement);
        //拿到dom后才能向其中追加节点
        useEffect(()=>{
          init();
          loadGLTF();
          animation();
        },[]);
        

        const init = ()=>{
          // const width = threeDom.current.offsetWidth;
          // const height = threeDom.current.offsetHeight;
          const width = window.innerWidth;
          const height = window.innerHeight;
          //设置加载器的宽高
          renderer.setSize(width, height);
          threeDom.current.appendChild(renderer.domElement);

          //相机的位置
          camera.position.set(0, 0, 40);

          //光源，这里是环境光源
          const spotLight = new THREE.AmbientLight(0xffffff,1);
          //设置平行光
          // const spotLight = new THREE.DirectionalLight(0xffffff,1)
          //设置点光
          // const spotLight = new THREE.PointLight(0xffffff,1)
          spotLight.position.set(50,50,50);
          scene.add(spotLight);

          //加载器的背景颜色
          renderer.setClearColor('#F8F8FF', 1);
          renderer.render(scene, camera);
        }

        //加载外部文件
        const loadGLTF = ()=>{
          const loader = new GLTFLoader().setPath("");
          loader.load( require('../../static/727.gltf'), function ( gltf ) {
            scene.add( gltf.scene );
            renderer.render(scene, camera);
          }, undefined, function ( error ) {
            console.error( error );
          } );

        }

        const animation = () => {
          renderer.render(scene, camera);
          requestAnimationFrame(animation);
        }
        
        
       
  return (
    <div>
      <Row className='grid-gutter-demo' gutter={24} style={{width:'1200px'}}>
            <Col span={24} ref={threeDom} style={{width: '100%',height:'100vh'}}>
              


            </Col>
      </Row>
      
    </div>
  )
}
