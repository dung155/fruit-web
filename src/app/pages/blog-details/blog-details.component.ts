import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router:Router) { }

  banner=[
    {
      id:1,
      img:'assets/img/breadcrumb.jpg'
    }
]
blogDetail:any;
recentBlog:any
blogYouLike:any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(param =>{
    console.log(param.newsId);
    if(param.newsId){
      this.blogService.getBlogDetailsId(+param.newsId).subscribe(res =>{
        console.log(res);
        this.blogDetail=res;
      });
    }
  });

  this.blogService.getPaginationBlog(1, 3).subscribe(res => {
    this.recentBlog = res.content;
    console.log(this.recentBlog);
  });
  this.blogService.getPaginationBlog(0, 3).subscribe(res => {
    this.blogYouLike = res.content;
    console.log(this.blogYouLike);
  });
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
