import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.taskService.getTasks().then(
      data => this.tasks = data
    );
  }

  goEditTask(id: number) {
    this.router.navigateByUrl(
      `/edit${ id != undefined ? '/' + id : ''}`
    );
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).then(
      () => this.taskService.getTasks().then(
        data => this.tasks = data
      )
    );
  }

  async presentAlertConfirm(id: number, title: string) {
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `Vas a borrar la tarea <strong>${title}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => this.deleteTask(id)
        }
      ]
    });
    await alert.present();
  }
}
