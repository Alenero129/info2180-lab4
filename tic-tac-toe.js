var count = 0;
var board, squares;

window.onload = function() {
  board = document.getElementById('board');
  reset();
  document.getElementsByClassName('btn')[0].addEventListener('click', reset);
}

function reset() {
  count = 0;
  document.getElementById('status').classList.remove('you-won');
  document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';
  squares = board.getElementsByTagName('div');
  var i;

  for(i=0; i<squares.length; i++) {
    squares[i].className = 'square';
    squares[i].innerText = '';
    squares[i].classList.add('hover');

    squares[i].addEventListener('click', function() {
      if (this.innerText == '') {
        count+=1;
        console.log(count%2 == 0);
        console.log(count);
        console.log(this+"HI");

        if (count%2 == 0) {
          this.classList.add('X');
          this.innerText = 'X';
          check('X');
        }
        else {
          this.classList.add('O');
          this.innerText = 'O';
          check('O');
        }
      }
    }, false);
  }
}

function check(value) {
  console.log(squares[0]);
  console.log(value);
  var winningCombo = [
      [squares[0], squares[1], squares[2]],
      [squares[3], squares[4], squares[5]],
      [squares[6], squares[7], squares[8]],

      [squares[0], squares[3], squares[6]],
      [squares[1], squares[4], squares[7]],
      [squares[2], squares[5], squares[8]],

      [squares[0], squares[4], squares[8]],
      [squares[6], squares[4], squares[2]]
    ];

  var check = 0;
  var i, p;

  for (i=0; i<winningCombo.length; i++) {
    for (p=0; p<winningCombo[i].length; p++) {
      //console.log(winningCombo[i][p]);
      if (winningCombo[i][p].innerText == value) {
        check += 1;
        console.log('check = '+check);
      }
    }

    if (check < 3) {
      check = 0;
    }
    if (check == 3) {
      document.getElementById('status').innerHTML = 'Congratulations! ' + value + ' is the Winner!';
      document.getElementById('status').classList.add('you-won');
      break;
    }
  }
}
