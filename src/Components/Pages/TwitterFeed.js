import React, {Component} from "react"
import {Timeline} from "react-twitter-widgets"

class TwitterFeed extends Component {
  render() {
    return (
      <div>
        <div className="container mb-4">
          <div className="feedBox">
            <Timeline
              className="mt-4"
              dataSource={{
                sourceType: "profile",
                screenName: "theclever_dev",
              }}
              options={{
                username: "theclever_dev",
                height: "800",
              }}
              onLoad={() => console.log("Timeline is loaded!")}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TwitterFeed
