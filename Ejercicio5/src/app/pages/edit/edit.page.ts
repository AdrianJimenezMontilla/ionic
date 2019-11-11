import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  task: Task = {
    title: '',
    description: '',
    category: ''
  };

  tituloPagina: string = "";

  constructor(
    private taskService : TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.task = this.taskService.getTask(+id);
      this.tituloPagina = "Editar '" + this.task.title + "'";
    } else {
      this.tituloPagina = "Crear tarea";
    }
  }

  saveTask() {
    this.taskService.saveTask(this.task).then(
      () => this.router.navigateByUrl('/home')
    );
  }

}
