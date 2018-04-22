import {Component, OnInit, HostBinding, HostListener} from '@angular/core';
import {cardAnim} from '../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [cardAnim]
})
export class ProjectItemComponent implements OnInit {

  // 在 Angular 中，我们可以使用 HostBinding 装饰器，实现元素的属性绑定。
  // 等于说是,在外边调用该组件时, 给这个组件绑定了 [@card] = 'cardState' 属性
  // 将 cardState 绑定到 @card 属性上去
  // @HostBinding('@card') cardState = 'out';

  cardState = 'out';

  constructor() {
  }

  ngOnInit() {
    // 数组里面删除某个元素
    // this.projects = this.projects.filter(p => p.id !== project.id);
  }


  // HostListener 是属性装饰器，用来为宿主元素添加事件监听。
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

}
