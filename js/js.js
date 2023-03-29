$(document).ready(function () {
  var count = 0

  $('.switch').click(function () {
    count += 1

    //day
    if (count % 2 == 0) {
      $('.button').css('left', '3px')
      $('body').css('background-color', '#f1ede3')
      $('.circle').css({
        background: 'linear-gradient(to bottom, #be4405, #f6c60c)',
        border: '2px solid #555555',
      })
      $('.sea').css(
        'background',
        `repeating-radial-gradient(
              ellipse farthest-corner at center -400%,
              #f5c30e 30%,
              #518eac 90%
            )
            repeat scroll 0 0 #518eac`,
      )
      $('.sun').css({
        top: '55%',
        left: 'calc(50% - 50px)',
      })
      $('.moon').css({
          top : '-20px' ,
          right : '-45px'
      })
      $('.star').css('display', 'none')
      $('.title').css('color', '#5a5555')
      $('.switch').css('background-color', '#da8508')
    }
    //night
    else {
      $('.button').css('left', '36px')
      $('body').css('background-color', '#080d17')
      $('.circle').css({
        background: 'linear-gradient(to bottom, #111936, #285A7B)',
        border: '2px solid #e9e5d5',
      })
      $('.sea').css(
        'background',
        `repeating-radial-gradient(ellipse farthest-corner at center -400%, #7fa1bb 30%, #1d425a 90%) repeat scroll 0 0 #1d425a`,
      )
      $('.sun').css({
        top: '80%',
        left: '5%',
      })
      $('.moon').css({
        top : '30%' ,
        right : '25%'
    })
      $('.star').css('display', 'block')
      $('.title').css('color', '#e9e5d5')
      $('.switch').css('background-color', '#1c3958')
    }
  })
})
