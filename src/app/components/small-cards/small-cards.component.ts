import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css'],
})
export class SmallCardsComponent implements OnInit {
  ngOnInit(): void {}
  myFn() {
    alert('hello');
  }

  @Input()
  image_post: string = '';

  @Input()
  title_post: string = 'Titulo dinamico 5';

  @Input()
  content_post: string = 'C5';

  @Input()
  author_name: string = 'A5';

  @Input()
  author_image: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/150px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg';

  @Input()
  post_date: string = 'PD5';
}
