import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router:Router, private blogService: BlogService) { }
  banner=[
    {
      id:1,
      img:'assets/img/breadcrumb.jpg'
    }
  ]

  blogs:any[]=[];
  recentBlog:any

  totalPagesBlog = 0;
  renderPageBlog: number[] = [];
  currentPageBlog = 0;
  pageSizeBlog = 6;

  ngOnInit(): void {
    this.loadBlog();
    console.log(this.loadBlog());

    this.blogService.getPaginationBlog(1, 4).subscribe(res => {
      this.recentBlog = res.content;
      console.log(this.recentBlog);
    });

  }

  loadBlog(pageBlog?: number) {
    if(!pageBlog){
      pageBlog = 1
    }
    this.blogService.getPaginationBlog(pageBlog - 1, this.pageSizeBlog ).subscribe(res => {
      this.blogs = res.content;
      this.totalPagesBlog = res.totalPages;
      this.renderPageBlog = this.rangePro(this.totalPagesBlog);
      console.log(res);
    });
  }

  rangePro(value: number) {
    const result: number[] = [];
    for (let i = 0; i < value; i ++) {
      result.push(i + 1);
    }
    return result;
  }

  changePageBlog(pageBlog: number) {
    this.loadBlog(pageBlog);
  }


  goBlogDetails(blog:any){
    console.log(blog);
    const param:NavigationExtras = {
        queryParams:{
          newsId: blog.id
        }
    };
    this.router.navigate(['pages/blog-details'], param);
  }




}
