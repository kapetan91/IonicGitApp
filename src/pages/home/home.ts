import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitService } from '../../service/git.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public foundRepository;
    public username;

  constructor(
  	public navCtrl: NavController,
  	public gitService: GitService
  	) {
  	
  }

  getRepository(){
  	this.gitService.getGitRepository(this.username).subscribe(
  		data => {
  			this.foundRepository = data.json();
  		},
  		err => console.error(err),
        () => console.log('getRepository completed')
  	);
  }

 
  

}
