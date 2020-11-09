import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  constructor(private service:SharedService) { }

  TasksList:any=[];

  ModalTitle: string;
  ActivateAddUpdateTaskComponent: boolean=false;
  task: any;

  addClick(){
    this.task= {
      Project:"",
      Id:0,
      Name:"",
      Description:"",
      IsComplete:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddUpdateTaskComponent=true;

  }

  updateClick(item: any){
    this.task= {
      Project:item.Project,
      Id:item.id,
      Name:item.Name,
      Description:item.Description,
      IsComplete:item.IsComplete}
    this.ModalTitle="Update Task info";
    this.ActivateAddUpdateTaskComponent=true;
  }

  deleteClick(item: { id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteProject(item.id).subscribe(data=>{
        alert("Record deleted!");
        this.refreshTasksList();
      })
    }
  }


  closeClick(){

    this.ActivateAddUpdateTaskComponent=false;
    this.refreshTasksList();
  }


  ngOnInit(): void {
    this.refreshTasksList();
  }



  refreshTasksList(){
    this.service.getTasksList().subscribe(data=>{
      this.TasksList = data;
    });

  }




}
