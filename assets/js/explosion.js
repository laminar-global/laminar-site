;(function() {
  var s = function(p) {
    var numWalkers
    var fr = 60
    var walkers = []
    var stage
    var hueColor
    var bgHue
    var shadow
    var origin
    var reset = true
    var cnv
    var name = 'explosion'
    // var dataHsb = document.body.dataset.hsb.split(' ')
    var dataHsb = [7, 67, 97]
    var localWindowWidth = window.innerWidth

    p.setup = function() {
      p.pixelDensity(1)

      // Create Stage
      stage = p.createVector(window.innerWidth, document.body.offsetHeight)
      cnv = p.createCanvas(stage.x, stage.y)
      cnv.id(name)
      cnv.class(name)
      cnv.parent(name + '-container')

      p.frameRate(fr)

      // Setup walkers
      numWalkers = p.random(50, 200)

      // Set Background
      hueColor = dataHsb[0] //p.random(0, 360);
      p.colorMode(p.HSB)
      p.background(dataHsb[0], dataHsb[1], dataHsb[2])
      // p.strokeCap(p.ROUND)

      // Create Walkers
      for (i = 0; i < numWalkers; i++) {
        walkers[i] = new Walker()
      }
      walkers.sort((a, b) => b.size - a.size)
    }

    p.resetCanvas = function() {
      p.clear()
    }

    p.draw = function() {
      for (i = 0; i < numWalkers; i++) {
        walkers[i].display()
        walkers[i].update()
      }
    }

    p.windowResized = function() {
      if (window.innerWidth !== localWindowWidth) {
        localWindowWidth = window.innerWidth
        p.resizeCanvas(window.innerWidth, document.body.offsetHeight)
        p.clear()
        p.setup()
      }
    }

    function Walker() {
      // Set Properties
      // this.pos = p.createVector(p.width / 2, p.height / 2)
      // this.pos = p.createVector(p.width / 2, window.innerHeight / 2)
      this.size =
        stage.x >= stage.y
          ? p.random(p.width * 0.02, p.width * 0.06)
          : p.random(p.height * 0.02, p.height * 0.07)
      this.pos = p.createVector(
        // p.width / 2 + p.random(-50, 50),
        p.random(p.width / 3, (p.width / 3) * 2),
        window.innerHeight + this.size
        // window.innerHeight / 2
      )
      this.prev = this.pos.copy()
      this.vel = p.createVector(0, 0)
      this.acc = p.createVector(
        p.random(p.random(-0.05, 0.05), p.random(-0.3, 0.3)),
        p.random(p.random(-0.05, 0.05), p.random(-0.3, 0.3))
      )
      this.decay = p.random(0.5, 2) // Rate at which walkers shrink
      // this.colorAngle = hueColor + p.random(-80, 80)
      // this.sat = p.random(70, 80)
      // this.light = p.random(60, 80)
      this.colorAngle = dataHsb[0]
      this.sat = dataHsb[1]
      this.light = dataHsb[2]
      this.shadow = p.createVector(-this.acc.x, -this.acc.y)

      this.speed =
        // stage.x >= stage.y
        //   ? p.random(p.width * 0.0032, p.width * 0.012)
        //   : p.random(p.height * 0.0032, p.height * 0.012)
        stage.x >= stage.y
          ? p.random(p.width * 0.0032, p.width * 0.006)
          : p.random(p.height * 0.0032, p.height * 0.006)

      this.update = function() {
        var randomWalk = p.createVector(
          p.random(-this.speed, this.speed),
          p.random(-this.speed, this.speed)
        )
        // this.vel.add(this.acc.mult(1.005))
        this.vel.add(this.acc.mult(1.007))
        // this.vel.add(this.acc.mult(1.025))
        // this.acc = this.acc.mult(1.01)
        this.prev = this.pos.copy()
        this.pos.add(this.vel)
        this.pos.add(randomWalk)
        this.size -= this.decay

        this.colorAngle += p.random(-1.75, 0.5)
        if (this.colorAngle <= 0) {
          this.colorAngle += 360
        } else if (this.colorAngle >= 360) {
          this.colorAngle -= 360
        }

        this.light -= 0.1
        // this.light -= 0.05
        this.sat -= 0.005
      }

      this.display = function() {
        if (this.size <= 0) {
          return
        } else {
          // //Shadow
          // p.fill(this.colorAngle, this.sat, this.light - 50)
          // p.noStroke()
          // p.ellipse(
          //   this.pos.x + this.shadow.x,
          //   this.pos.y + this.shadow.y,
          //   this.size,
          //   this.size
          // )

          // // Circle
          // p.fill(this.colorAngle, this.sat, this.light)
          // p.noStroke()
          // p.ellipse(this.pos.x, this.pos.y, this.size, this.size)

          p.strokeWeight(this.size)
          p.stroke(this.colorAngle, this.sat, this.light - 50)
          p.line(
            this.pos.x + this.shadow.x,
            this.pos.y + this.shadow.y,
            this.prev.x + this.shadow.x,
            this.prev.y + this.shadow.y
          )
          p.stroke(this.colorAngle, this.sat, this.light)
          p.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
        }
      }
    }
  }

  return new p5(s)
})()
