import 'package:flutter/material.dart';
import 'map.dart';
import 'timer.dart';


void main() {
  runApp(MaterialApp(
    title: 'Navigation Basics',
    home: Home(),
  ));
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Center(
        child: new Column(
          children: <Widget>[
            RaisedButton(
          child: Text('Open Map'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => Map()),
            );
          },
        ),
        RaisedButton(
          child: Text('Open Timer'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => TimerPage()),
            );
          },
        ),
        ]
      )),
    );
  }
}