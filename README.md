> 1. angular过渡动画初体验
- 安装动画模块
```
npm i  —save @angular/animations
```
- 在 `app.module.ts`中引入动画模块`BrowserAnimationsModule`
![引入动画模块`BrowserAnimationsModule`](https://upload-images.jianshu.io/upload_images/1482909-6866fb869c485c9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)
- 创建一个`div`
```
  <!--
  @square 动画触发器的名字
  -->
  <div class="square" [@square]="squareState" (click)="onClick()"></div>
```
- 在`css`中设置样式
```
.square{
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: black;
}
```
- 在`ts`文件中编写过渡动画
```
import {Component} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateX(0)'})),
      state('red', style({'background-color': 'red', 'height': '50px', 'transform': 'translateX(100%)'})),
      transition('green => red', animate('.2s 1s')), // 第一个参数:动画时间, 第二个参数:动画延迟时间
      transition('red => green', animate(1000))
    ])
  ]
})
export class AppComponent {

  squareState: string;
  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
```
一个简单的过渡效果就实现了
![简单过渡动画](https://upload-images.jianshu.io/upload_images/1482909-50ace711b61354af.gif?imageMogr2/auto-orient/strip)

> 2. 缓动函数和关键帧
- 缓动函数
缓动函数: 指定动画效果在执行时的速度, 使其看起来更加真实.
缓动函数速查表: http://easings.net/zh-cn
自定义缓动函数: http://cubic-bezier.com/
####以上面的代码为例, 给动画添加缓动函数
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)'})),
      state('red', style({'background-color': 'red', 'height': '100px', 'transform': 'translateY(100%)'})),
      transition('green => red', animate('.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
      transition('red => green', animate('.8s ease-out'))
    ])
  ]
})
```
![自定义缓动函数](https://upload-images.jianshu.io/upload_images/1482909-5678db84b030ff25.gif?imageMogr2/auto-orient/strip)

其中, 缓动函数可以使css3中提供的那些(如: liner, ease-in, ease-out等), 也可以是自己定义的.

- 关键帧
由于不是所有的缓动函数 `CSS3` 都支持, 所以其他复杂的动画可以交给`关键帧`动画解决.
帧: - 就是动画中最小单位的单幅影像画面.
关键帧: -物体运动或变化中的关键动作所处的那一帧.

  ####还是以上面的列子, 我们修改最后一个缓动函数为关键帧动画
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', height: '100px', transform: 'translateY(-100%)'})),
      state('red', style({'background-color': 'red', height: '100px', transform: 'translateY(100%)'})),
      transition('green => red', animate('.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
      transition('red => green', animate(5000, keyframes([
        style({transform: 'translateY(100%)'}),
        style({transform: 'translateY(98%)'}),
        style({transform: 'translateY(95%)'}),
        style({transform: 'translateY(90%)'}),
        style({transform: 'translateY(80%)'}),
        style({transform: 'translateY(60%)'}),
        style({transform: 'translateY(30%)'}),
        style({transform: 'translateY(0)'}),
        style({transform: 'translateY(-10%)'}),
        style({transform: 'translateY(-5%)'}),
        style({transform: 'translateY(-2%)'}),
        style({transform: 'translateY(0)'}),
        style({transform: 'translateY(10%)'}),
        style({transform: 'translateY(15%)'}),
        style({transform: 'translateY(-15%)'}),
        style({transform: 'translateY(-40%)'}),
        style({transform: 'translateY(-80%)'}),
        style({transform: 'translateY(-90%)'}),
        style({transform: 'translateY(-95%)'}),
        style({transform: 'translateY(100%)'}),
      ])))
    ])
  ]
})
```
实现效果:
![关键帧动画](https://upload-images.jianshu.io/upload_images/1482909-0b3fde39c42069fe.gif?imageMogr2/auto-orient/strip)

> 3. 路由动画 及 高阶动画函数 
- Group : 用于同时进行一组的动画变换
- Query & Stagger
   - Query 用于父节点寻找子节点.
   - Stagger 指定有多个满足 Query 的元素, 每个动画之间有间隔.
   
<h2>运行代码请执行</h2>

`npm install`

`ng serve --open`
