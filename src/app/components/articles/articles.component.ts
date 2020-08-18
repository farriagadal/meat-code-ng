import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];
  public menu = ['Todos', 'Productos', 'Recetas', 'Consejos'];
  public menuOptionSelected = 0;

  constructor(private articlesService: ArticlesService) { }

  public ngOnInit(): void {
    this.getAllArticles();
  }

  public getAllArticles(): void {
    this.articles = [];
    this.articlesService.getAllArticles().subscribe((data: Article[]) => {
      console.log(data);
      this.menuOptionSelected = 0;
      data.map(article => {
        this.articles.push(new Article(article));
      });
    });
  }

  public filterArticles(categoryNumber: number): void {
    this.articlesService.getFilteredArticles(this.menu[categoryNumber]).subscribe((data: Article[]) => {
      this.menuOptionSelected = categoryNumber;
      this.articles = [];
      data.map(article => {
        this.articles.push(new Article(article));
      });
    });
  }

}
