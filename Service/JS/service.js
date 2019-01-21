// wanmei_gg_big显示与隐藏
$('.wanmei_gg_small').mouseenter(function () {
    $(this).slideUp(500)
    // .css('display','none')
    $('.wanmei_gg_big').slideDown(1000)
    // .css('display','block')
})

$('.wanmei_gg_big').mouseleave(function () {
    $('.wanmei_gg_small').fadeIn(500)
    // .css('display','block')
    $('.wanmei_gg_big').hide(1000)
    // .css('display','none')
})


// youxi的显示与隐藏
$('.top-nav').find('.span1 input').mouseenter(function () {
    $('.youxi').fadeIn(1000)
    // .css('display','block')
})

$('.youxi').mouseleave(function () {
    $('.youxi').slideUp(1000)
    // .css('display','none')
})

// 搜索框处帖子处的下拉列表
$('.search').children('a').find('span').click(function () {
    $('.search').children('ul').fadeIn(500)
    // .css('display','block')
    $('.search').children('ul').find('a').click(function () {
        var a = $(this).text()
        // console.log(a)
        $('.search').children('a').find('span').text(a)
    })
})
// 离开下拉列表本身隐藏
$('.search').mouseleave(function () {
    $('.search').children('ul').fadeOut(500)
    // .css('display','none')
})


// 主题导航中右侧按钮中的子菜单显示与隐藏
$('.menu').mouseenter(function () {
    $('.menu2').slideDown(1000)
    // .css('display','block')
})

$('.pr-menu').mouseleave(function () {
    $('.menu2').fadeOut(1000)
    // .css('display','none')
})

// 子板块的内容展示区域显示与隐藏
$('.collapsed_no').click(function () {
    $(this).css('display','none').next().css('display','block')
    $('.content').slideUp(500)
    // .css('display','none')
})

$('.collapsed_yes').click(function () {
    $(this).css('display','none').prev().css('display','block')
    $('.content').slideDown(500)
    // .css('display','block')
})

// 第一个发帖部分返回按钮处子菜单
$('.fan1').mouseenter(function () {
    $('.l-return1').children('ul').fadeIn(500)
    // .css('display','block')
})

$('.l-return1').mouseleave(function () {
    $('.l-return1').children('ul').slideUp(500)
    // .css('display','none')
})


// 第二个发帖部分返回按钮处子菜单
$('.fan2').mouseenter(function () {
    $('.l-return2').children('ul').fadeIn(500)
    // .css('display','block')
})

$('.l-return2').mouseleave(function () {
    $('.l-return2').children('ul').slideUp(500)
    // .css('display','none')
})

// 第一个发帖部分下面的内容盒子中的上盒子第二个li中子菜单的显示与隐藏
$('.two1').click(function () {
    $('.two2').slideDown(800)
}) 

$('.two3').mouseleave(function () {
    $('.two2').slideUp(800)
}) 

// 第一个发帖部分下面的内容盒子中的上盒子第四个li中子菜单的显示与隐藏
$('.four1').click(function () {
    $('.four2').slideDown(1000)
}) 

$('.four3').mouseleave(function () {
    $('.four2').slideUp(1000)
}) 

// 第一个发帖部分下面的内容盒子中的上盒子第六个li中子菜单的显示与隐藏
$('.six1').click(function () {
    $('.six2').slideDown(1000)
}) 

$('.six3').mouseleave(function () {
    $('.six2').slideUp(1000)
}) 

// 第一个发帖部分下面的内容盒子中的上盒子最后一个li中提示信息的显示与隐藏
$('.refresh').click(function () {
    $('.refresh1').fadeIn(800)
})

setInterval(function () {
    $('.refresh1').fadeOut(800)
},5000)


// 快速发帖上部盒子数字80动画
$('.top-box').children('input')

// 回到顶部
var return1 = document.querySelector('.return1')
console.log(return1)
window.onscroll = function () {
    var n = document.documentElement.scrollTop || document.body.scrollTop
    console.log(n)
    if (n >= 300 ) {
        // console.log(123)
        return1.style.display = 'block'
    }else {
        return1.style.display = 'none'
    }
}
return1.onclick = function () {
    document.documentElement.scrollTop = '0'
    document.body.scrollTop = '0'
}