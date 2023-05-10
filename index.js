// code your solution here
function superbowlWin (element) {
    for (const record of element) {
      if (record.result === 'W') {
        return (record.year);
      }
    }
  }
