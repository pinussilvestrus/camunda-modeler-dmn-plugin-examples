function LoggingPlugin(eventBus) {
  eventBus.on('input.edit', function(event) {
    console.log('A input header was clicked!', event);
  });

  eventBus.on('cell.click', function(event) {
    console.log('A cell was clicked!', event);
  })
}

module.exports = {
  __init__: [ 'loggingPlugin' ],
  loggingPlugin: [ 'type', LoggingPlugin ]
};