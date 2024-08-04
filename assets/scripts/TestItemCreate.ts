import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { item3 } from './item3';
const { ccclass, property } = _decorator;

type itemData ={
    itemName:string;
    itemDesc:string

};


@ccclass('TestItemCreate')
export class TestItemCreate extends Component {

    itemDataArray:itemData[];

    @property(Node)
    contentNode:Node=null;

    
    @property(Prefab)
    item3Prefab:Prefab=null;


    start() {

        this.itemDataArray=[];
        
        for(let i=0;i<300;i++){
            let data:itemData={itemName:i.toString(),itemDesc:"the desc "+i.toString()};
            this.itemDataArray.push(data);

        }

        this.itemDataArray.forEach(element => {
            let ins=instantiate(this.item3Prefab);
            ins.getComponent(item3).setValue(element.itemName,element.itemDesc);

            this.contentNode.addChild(ins);
        });





    }

    update(deltaTime: number) {
        
    }
}

