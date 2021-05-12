/**
 * 定义一个类 Tab
 * 功能：1.切换
 * 2.添加
 * 3.删除
 */

let that;
class Tab {
  constructor(eleId) {
    that = this; //让that保存我当前的实例化对象this
    // 获取元素
    this.tab = document.querySelector(eleId);
    this.ul = this.tab.querySelector("#nav-list");
    this.cons = this.tab.querySelector("#tab-con");
    this.addBtn = this.tab.querySelector("#add");

    this.lastNavIndex = this.ul.children.length - 1; //记录最后一个元素的索引
    this.seleNavIndex = 0; //记录被选中li的data-index

    this.init();
    this.bindIndex();
  }

  // 初始化  给页面上的元素绑定事件
  init() {
    this.ul.onclick = function (e) {
      // console.log(this);// 注意：this在这指向 ul
      // classList.contains() 判断元素是否包含某个类名
      if (e.target.classList.contains("nav-item")) {
        // 点击的是li  切换
        // console.log('点击li');
        that.toggleTab(e.target);
      }
      if (e.target.classList.contains("title")) {
        //点击h3  切换
        // console.log('点击h3');
        that.toggleTab(e.target.parentNode);
      }
      if (e.target.classList.contains("delet")) {
        // 点击 span  删除
        // console.log('点击span');
        that.deletTab(e);
      }
    };

    // 点击添加按钮
    this.addBtn.onclick = this.addTab;
  }

  // 给li 和 con 绑定标签属性 data-index
  bindIndex() {
    for (let i = 0; i < this.ul.children.length; i++) {
      this.ul.children[i].dataset.index = i;
      this.cons.children[i].dataset.index = i;
    }
  }
  // tab栏切换功能 ( ele参数：指点击的li)
  toggleTab(ele) {
    // 清除所有 li 的active类名 ，con-item的 con-active类名
    for (var i = 0; i < this.ul.children.length; i++) {
      this.ul.children[i].classList.remove("active");
      this.cons.children[i].classList.remove("con-active");
    }
    // 再给当前点击的li 添加 active类名
    ele.classList.add("active");
    // 再给对应的 con 添加con-active类名
    let index = ele.dataset.index; //获取点击li的 data-index属性值
    let con = this.cons.querySelector(`[data-index="${index}"]`);
    con.classList.add("con-active");

    this.seleNavIndex = index; //修改seleNavIndex的值
  }

  // 添加功能
  addTab() {
    // console.log(this); // button
    // 创建li
    let li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `
        <h3 class="title">导航${that.lastNavIndex + 1 + 1}</h3>
        <span class="delet">X</span>
        `;
    // 依据当前最后一个元素的索引 设置新添加元素的索引
    li.dataset.index = that.lastNavIndex + 1;
    that.ul.appendChild(li);

    // 创建con
    let con = document.createElement("div");
    con.className = "con-item";
    con.innerHTML = `内容${that.lastNavIndex + 1 + 1}`;
    con.dataset.index = that.lastNavIndex + 1;
    that.cons.appendChild(con);

    that.lastNavIndex++; //修改记录最后一个元素索引的值
  }

  // 删除功能
  deletTab(event) {
    // console.log(this); // this 指向实例对象 tab
    event.stopPropagation(); //阻止冒泡
    //获取 点击删除按钮所在的li
    let li = event.target.parentNode;
    let deleIndex = li.dataset.index;

    // 当删除的是 选中的元素时，应该设置它的下一个兄弟元素为选中项
    if (deleIndex == this.seleNavIndex) {
    //   console.log("删除的是被选中的li");
      if (li.nextElementSibling) {
        // 如果被选中元素后面有兄弟，就切换它后面的兄弟被选中
        this.toggleTab(li.nextElementSibling)
        // console.log("我的后面有兄弟");
      } else if (li.previousElementSibling){
        // 如果被选中元素后面没有兄弟，就切换它前面的兄弟被选中
        this.toggleTab(li.previousElementSibling)
        // console.log("我的后面没有兄弟了");
      }
    }

    // 删除li
    this.ul.removeChild(li);
    // 删除li对应的con
    let con = document.querySelector(`[data-index="${deleIndex}"]`);
    this.cons.removeChild(con);
  }
}

// new 对象的时候，会自动调用 类中的构造函数
let tab = new Tab("#tab");
// tab.init();
// tab.bindIndex();
