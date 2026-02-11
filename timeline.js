document.addEventListener('DOMContentLoaded', () => {

  const tl = anime.timeline({
    loop: true,
    easing: 'easeInOutQuad'
  });

  tl
  .add({
    targets: '.dot:nth-child(1)',
    scale: [0.6, 1.2],
    opacity: [0.4, 1],
    duration: 300
  })
  .add({
    targets: '.dot:nth-child(1)',
    scale: 0.6,
    opacity: 0.4,
    duration: 200
  })
  .add({
    targets: '.dot:nth-child(2)',
    scale: [0.6, 1.2],
    opacity: [0.4, 1],
    duration: 300
  })
  .add({
    targets: '.dot:nth-child(2)',
    scale: 0.6,
    opacity: 0.4,
    duration: 200
  })
  .add({
    targets: '.dot:nth-child(3)',
    scale: [0.6, 1.2],
    opacity: [0.4, 1],
    duration: 300
  })
  .add({
    targets: '.dot:nth-child(3)',
    scale: 0.6,
    opacity: 0.4,
    duration: 200
  });

});
