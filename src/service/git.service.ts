import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class GitService {

	constructor(private http: Http) { }

	public getGitRepository(username)
	{
        let repository = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repository;
    }

	
}