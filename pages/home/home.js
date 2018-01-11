// rich-text.js
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    circular: true,
    interval: 1000,
    duration: 300,
    showBanner: true,
    categories: [
      { key: '休闲零食', val: '1' },
      { key: '方便速食', val: '2' },
      { key: '乳品饮料', val: '3' },
      { key: '服饰', val: '4' },
      { key: '电影', val: '5' },
      { key: '生鲜', val: '6' },
      { key: '点外卖', val: '7' },
      { key: '测试8', val: '8' },
      { key: '测试9', val: '9' },
      { key: '测试10', val: '10' },
      { key: '测试11', val: '11' },
      { key: '测试12', val: '12' },
      { key: '测试13', val: '13' },
      { key: '测试14', val: '14' },
      { key: '测试15', val: '15' },
      { key: '测试16', val: '16' }
    ],
    selected: '',
    isShowCategory: true
  },
  select(e) {
    if (this.data.selected == e.target.dataset.index) return;
    this.setData({
      selected: e.target.dataset.index
    });
  },
  toggleCategory() {
    this.setData({
      isShowCategory: !this.data.isShowCategory
    });
  }
})