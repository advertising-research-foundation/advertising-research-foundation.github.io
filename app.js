const payTV = {"id": "1", "name": "paytv_HH", "label": "Pay TV household", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.0793026254665124}, {"id": "12", "name": "existing", "value": 0.48838115821254613, "label": "Existing Users", "children": [{"id": "121", "name": "live_subscription_HH", "value": 0.047136102896835654, "label": "Households have online subscription service that includes live TV channels"}, {"id": "122", "name": "video_streaming_HH", "value": 0.023871302818214316, "label": "Households have any streaming service"}, {"id": "123", "name": "streaming_device_HH", "value": 0.031337668759204886, "label": "Households have a device that connects a TV to the Internet"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.11368201053660076, "label": "Churn Users", "children": [{"id": "131", "name": "live_subscription_HH", "value": 0.017640942983626225, "label": "Households have online subscription service that includes live TV channels"}, {"id": "132", "name": "video_streaming_HH", "value": 0.008512341410447993, "label": "Households have any streaming service"}, {"id": "133", "name": "streaming_device_HH", "value": 0.0032487672328244603, "label": "Households have a device that connects a TV to the Internet"}, {"id": "134", "name": "notSelected", "value": 0.008897672341761328, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const amazonPrime = {"id": "1", "name": "Q7_2", "label": "Amazon Prime Video", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.08195327441720797}, {"id": "12", "name": "existing", "value": 0.5070914345677933, "label": "Existing Users", "children": [{"id": "121", "name": "Q7_1", "value": 0.0195084782254446, "label": "Netflix"}, {"id": "122", "name": "Q7_3", "value": 0.03581685928491278, "label": "Hulu"}, {"id": "123", "name": "Q7_4", "value": 0.04740567731848809, "label": "HBO Max"}, {"id": "124", "name": "Q7_5", "value": 0.056255738568171336, "label": "Disney+"}, {"id": "125", "name": "Q7_6", "value": 0.08967770895800464, "label": "Paramount+"}, {"id": "126", "name": "Q7_7", "value": 0.0388284020613302, "label": "Apple TV+"}, {"id": "127", "name": "Q7_8", "value": 0.0365745992132259, "label": "ESPN+"}, {"id": "128", "name": "Q7_9", "value": 0.05740956847536229, "label": "Peacock Premium"}, {"id": "129", "name": "Q7_12", "value": 0.05153268246859479, "label": "Discovery+"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.11485154134654305, "label": "Churn Users", "children": [{"id": "131", "name": "Q7_1", "value": 0.0008927914703115615, "label": "Netflix"}, {"id": "132", "name": "Q7_3", "value": 0.007705450980546941, "label": "Hulu"}, {"id": "133", "name": "Q7_4", "value": 0.006733273255328308, "label": "HBO Max"}, {"id": "134", "name": "Q7_5", "value": 0.007910155895287981, "label": "Disney+"}, {"id": "135", "name": "Q7_6", "value": 0.007638246834517833, "label": "Paramount+"}, {"id": "136", "name": "Q7_7", "value": 0.004122113534492484, "label": "Apple TV+"}, {"id": "137", "name": "Q7_8", "value": 0.0022000489903067784, "label": "ESPN+"}, {"id": "138", "name": "Q7_9", "value": 0.008806903965061025, "label": "Peacock Premium"}, {"id": "139", "name": "Q7_12", "value": 0.008428007001259388, "label": "Discovery+"}, {"id": "1310", "name": "notSelected", "value": 0.03501830940489673, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const vMVPD = {"id": "1", "name": "live_subscription_HH", "label": "Households have online subscription service that includes live TV channels", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.0935337416626847}, {"id": "12", "name": "existing", "value": 0.1773046701955604, "label": "Existing Users", "children": [{"id": "121", "name": "paytv_HH", "value": 0.02260067297847854, "label": "Pay TV household"}, {"id": "122", "name": "video_streaming_HH", "value": 0.005307435080480805, "label": "Households have any streaming service"}, {"id": "123", "name": "streaming_device_HH", "value": 0.014958193577427885, "label": "Households have a device that connects a TV to the Internet"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.1202458307280354, "label": "Churn Users", "children": [{"id": "131", "name": "paytv_HH", "value": 0.010659401121665772, "label": "Pay TV household"}, {"id": "132", "name": "video_streaming_HH", "value": 0.004656743520134266, "label": "Households have any streaming service"}, {"id": "133", "name": "streaming_device_HH", "value": 0.0066839927083286056, "label": "Households have a device that connects a TV to the Internet"}, {"id": "134", "name": "notSelected", "value": 0.0023689069547581957, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const cable = {"id": "1", "name": "any_cable", "label": "Any cable service in the household", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.07015712829586983}, {"id": "12", "name": "existing", "value": 0.30763269826681316, "label": "Existing Users", "children": [{"id": "121", "name": "any_satellite", "value": 0.011600999288626264, "label": "Any satellite tv in the household"}, {"id": "122", "name": "any_telecom", "value": 0.022874226218114645, "label": "Any telecom service in the household"}, {"id": "123", "name": "antenna_HH", "value": 0.013295259853491812, "label": "Antenna Household"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.09947124262931094, "label": "Churn Users", "children": [{"id": "131", "name": "any_satellite", "value": 0.004130115938548481, "label": "Any satellite tv in the household"}, {"id": "132", "name": "any_telecom", "value": 0.007929412298763885, "label": "Any telecom service in the household"}, {"id": "133", "name": "antenna_HH", "value": 0.007288389093157276, "label": "Antenna Household"}, {"id": "134", "name": "notSelected", "value": 0.06870351638742876, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const netflix = {"id": "1", "name": "Q7_1", "label": "Netflix", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.06765233718205986}, {"id": "12", "name": "existing", "value": 0.5933965983339278, "label": "Existing Users", "children": [{"id": "121", "name": "Q7_2", "value": 0.044252234835983485, "label": "Amazon Prime Video"}, {"id": "122", "name": "Q7_3", "value": 0.06061927830044343, "label": "Hulu"}, {"id": "123", "name": "Q7_4", "value": 0.06336714522074532, "label": "HBO Max"}, {"id": "124", "name": "Q7_5", "value": 0.07705843873240228, "label": "Disney+"}, {"id": "125", "name": "Q7_6", "value": 0.10290267753744106, "label": "Paramount+"}, {"id": "126", "name": "Q7_7", "value": 0.04691786723313184, "label": "Apple TV+"}, {"id": "127", "name": "Q7_8", "value": 0.044120427584784266, "label": "ESPN+"}, {"id": "128", "name": "Q7_9", "value": 0.06417050241367983, "label": "Peacock Premium"}, {"id": "129", "name": "Q7_12", "value": 0.0625605875160797, "label": "Discovery+"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.11209015291310626, "label": "Churn Users", "children": [{"id": "131", "name": "Q7_2", "value": 0.004335040172202176, "label": "Amazon Prime Video"}, {"id": "132", "name": "Q7_3", "value": 0.004640679526542594, "label": "Hulu"}, {"id": "133", "name": "Q7_4", "value": 0.00904756713037634, "label": "HBO Max"}, {"id": "134", "name": "Q7_5", "value": 0.004689986199826676, "label": "Disney+"}, {"id": "135", "name": "Q7_6", "value": 0.010257278699641537, "label": "Paramount+"}, {"id": "136", "name": "Q7_7", "value": 0.005213606791297751, "label": "Apple TV+"}, {"id": "137", "name": "Q7_8", "value": 0.0025324272023657945, "label": "ESPN+"}, {"id": "138", "name": "Q7_9", "value": 0.011248067531986853, "label": "Peacock Premium"}, {"id": "139", "name": "Q7_12", "value": 0.009940238985742155, "label": "Discovery+"}, {"id": "1310", "name": "notSelected", "value": 0.038659223275359395, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const svod = {"id": "1", "name": "video_streaming_HH", "label": "Households have any streaming service", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.04977732958516968}, {"id": "12", "name": "existing", "value": 0.8059874535754218, "label": "Existing Users", "children": [{"id": "121", "name": "paytv_HH", "value": 0.0654239063122815, "label": "Pay TV household"}, {"id": "122", "name": "live_subscription_HH", "value": 0.07945307258354181, "label": "Households have online subscription service that includes live TV channels"}, {"id": "123", "name": "streaming_device_HH", "value": 0.054856697431566175, "label": "Households have a device that connects a TV to the Internet"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.05570871432770838, "label": "Churn Users", "children": [{"id": "131", "name": "paytv_HH", "value": 0.0054686117117069425, "label": "Pay TV household"}, {"id": "132", "name": "live_subscription_HH", "value": 0.003720127621468815, "label": "Households have online subscription service that includes live TV channels"}, {"id": "133", "name": "streaming_device_HH", "value": 0.005602344038011011, "label": "Households have a device that connects a TV to the Internet"}, {"id": "134", "name": "notSelected", "value": 0.010461534965037055, "label": "Didn't choose options above"}], "collapsed": "false"}]}
const broadband = {"id": "1", "name": "streaming_device_HH", "label": "Households have a device that connects a TV to the Internet", "children": [{"id": "11", "name": "new", "label": "New Users", "value": 0.0745583096374989}, {"id": "12", "name": "existing", "value": 0.6487149146355213, "label": "Existing Users", "children": [{"id": "121", "name": "paytv_HH", "value": 0.0497682733005194, "label": "Pay TV household"}, {"id": "122", "name": "live_subscription_HH", "value": 0.054979725663661494, "label": "Households have online subscription service that includes live TV channels"}, {"id": "123", "name": "video_streaming_HH", "value": 0.016309037064381224, "label": "Households have any streaming service"}], "collapsed": "false"}, {"id": "13", "name": "churn", "value": 0.11242224848734544, "label": "Churn Users", "children": [{"id": "131", "name": "paytv_HH", "value": 0.0075692659135248455, "label": "Pay TV household"}, {"id": "132", "name": "live_subscription_HH", "value": 0.012845580881510069, "label": "Households have online subscription service that includes live TV channels"}, {"id": "133", "name": "video_streaming_HH", "value": 0.0075477489878458814, "label": "Households have any streaming service"}, {"id": "134", "name": "notSelected", "value": 0.010900693677267991, "label": "Didn't choose options above"}], "collapsed": "false"}]}

const container = document.getElementById('treePlot');
const canvasWidth = container.clientWidth;
const canvasHeight = container.clientHeight || 1000;
G6.registerNode(
  'flow-rect',
  {
    draw(cfg, group) {
      const {
        id,
        name = '',
        label,
        value,
        collapsed,
      } = cfg;
      const rectConfig = {
        width: 200,
        height: 80,
        lineWidth: 1,
        fontSize: 14,
        fill: '#fff',
        radius: 4,
        stroke: id.slice(0,2) === '11'?'#228B22':
        id.slice(0,2) === '12'?'#FFD700':id.slice(0,2) === '13'?'#F08080':'#000080',
        opacity: 1,
      };


      const textConfig = {
        textAlign: 'left',
        textBaseline: 'top',
      };

      const rect = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          ...rectConfig,
        },
      });

      // variable 
      group.addShape('text', {
        attrs: {
          ...textConfig,
          x: 7,
          y: 2,
          text: name,
          fontSize: 14,
          fill: '#000',
          cursor: 'pointer',
        },
      });

      // label
      group.addShape('text', {
        attrs: {
          ...textConfig,
          x: 7,
          y: 30,
          text: label,
          fontSize: 14,
          fill: '#000',
        },
      });

      // value
      group.addShape('text', {
        attrs: {
          ...textConfig,
          x: 50,
          y: 55,
          text: value?`${((value || 0) * 100).toFixed(2)}%`:'',
          fontSize: 14,
          textAlign: 'right',
          fill: rectConfig.stroke,
        },
      });

      // bottom line
      group.addShape('rect', {
        attrs: {
          x: 0,
          y: rectConfig.height,
          width: rectConfig.width,
          height: 8,
          radius: [0, 0, rectConfig.radius, rectConfig.radius],
          fill: '#DCDFE5',
        },
      });

      // bottom percent
      group.addShape('rect', {
        attrs: {
          x: 0,
          y: rectConfig.height,
          width: cfg.value?rectConfig.width * cfg.value:0,
          height: 8,
          radius: [0, 0, 0, rectConfig.radius],
          fill: rectConfig.stroke,
        },
      });

      if (cfg.children && cfg.children.length) {
        // collapse circle
        group.addShape('circle', {
          attrs: {
            x: rectConfig.width,
            y: rectConfig.height / 2,
            r: 10,
            stroke: rectConfig.stroke,
            fill: '#fff',
          },
          name: 'collapse-marker'
        });

        // collpase text
        group.addShape('text', {
          attrs: {
            x: rectConfig.width,
            y: rectConfig.height / 2,
            width: 16,
            height: 16,
            textAlign: 'center',
            textBaseline: 'middle',
            text: collapsed ? '+' : '-',
            fontSize: 16,
            fill: rectConfig.stroke,
            cursor: 'pointer',
          },
          name: 'collapse-marker-text'
        });
      }
      return rect;
    }
  },
  'rect',
)


// Instantiate the Graph
const graph = new G6.TreeGraph({
container: 'treePlot', // the html container for the graph
// the size of the graph
width: canvasWidth,
height: canvasHeight,
// fitView: true, // fit the graph to the view
modes: { // interaction modes
    default: [ 'drag-canvas', {
    type: 'collapse-expand',
    shouldBegin: e => {
        if (e.target.get('name') === 'collapse-marker' || e.target.get('name') === 'collapse-marker-text') {
        graph.setItemState(e.item, 'collapse', e.item.getModel().collapsed ? 'yes' : 'no');
        return true;
        }
        return false;
    }
    }]
},
defaultNode: { // global node configuration
    type: 'flow-rect'
},
defaultEdge: { // global edge configuration
    type: 'cubic-horizontal'
},
nodeStateStyles: { // node styles in different states
    'collapse:yes': {
    'collapse-marker-text': {
        text: '-',
    },
    },
    'collapse:no': {
    'collapse-marker-text': {
        text: '+',
    },
    }
},
layout: { // layout algorithm for the tree graph
    type: 'compactBox',
    direction: 'LR',
    getId: function getId(d) {
      return d.id;
    },
    getHeight: function getHeight() {
      return 60;
    },
    getWidth: function getWidth() {
      return 250;
    },
    getVGap: function getVGap() {
    return 20;
    },
    getHGap: function getHGap() {
    return 10;
    },
}
});
// Load the data
graph.data(payTV);

function changeData(d){
  graph.changeData(d);
  graph.render();
  graph.fitCenter();
  graph.moveTo(50, 200)
}
var elements = document.getElementsByClassName('dropdown-item');

Array.from(elements).forEach((element) => {
  element.addEventListener('click', (event) => {
    (event.target.innerText === 'Pay TV')?changeData(payTV):
    (event.target.innerText === 'Cable')?changeData(cable):
    (event.target.innerText === 'vMVPD')?changeData(vMVPD):
    (event.target.innerText === 'SVOD')?changeData(svod):
    (event.target.innerText === 'Broadband (streaming devices)')?changeData(broadband):
    (event.target.innerText === 'Netflix')?changeData(netflix):changeData(amazonPrime)
  });
});

// // Render the graph
// graph.render();
// // graph.fitView();
// graph.fitCenter();
// graph.moveTo(50, 200)