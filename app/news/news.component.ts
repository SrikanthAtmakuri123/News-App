import { Component} from '@angular/core';
import{Http} from '@angular/http'
import{Source} from './source'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent{
  source:Source;
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  content:string;
  articles:any[];
  data:any;
  constructor(http:Http) { 
    http.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3bc597aa27854ff886773cae2df7127e")
            .subscribe(response=>{
              this.data=response.json();
              var dd = this.data;
              this.articles = dd.articles;
              



            })
          
  }

  
  

}
