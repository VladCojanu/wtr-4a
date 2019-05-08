//
//  TimerViewController.swift
//  ios-swift
//
//  Created by Vlad Cojanu on 2019-05-07.
//  Copyright © 2019 Vlad Cojanu. All rights reserved.
//

import UIKit

class TimerViewController: UIViewController {
    @IBOutlet var textView: UITextView!

    var ms = 0
    var timer = Timer()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        runTimer()
    }
    
    
    func runTimer() {
        timer = Timer.scheduledTimer(timeInterval: 0.01, target: self,   selector: (#selector(TimerViewController.updateTimer)), userInfo: nil, repeats: true)
    }

    @objc func updateTimer() {
        ms += 1     //This will decrement(count down)the seconds.
        let mili = ms % 100
        let seconds = ms / 100
        textView.text = "\(seconds):\(mili)"
    }
}
