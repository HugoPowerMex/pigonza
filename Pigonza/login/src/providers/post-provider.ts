import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

// configurar cabeceras http


@Injectable()
export class PostProvider {
    server: string = 'http://localhost/Pigonza v.1.1/Pigonza/server_api/';
     //server: string = 'http://pigonza.infinityfreeapp.com/server_api/';

    constructor(public http: Http) {

    }
    postData(body, file){
        let type = 'application/json; charset=utf-8;  Access-Control-Allow-Origin: *; Access-Control-Allow-Headers; ';
        let headers = new Headers({ 'Content-Type': type});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res.json());
    }
}
