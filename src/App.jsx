import { Component } from 'react'
import { Feedback } from './components/Feedback/Feedback'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const totalFeedback = good + neutral + bad
    return totalFeedback
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback()
    const { good } = this.state
    const percentage = (good * 100) / totalFeedback
    return Math.round(percentage)
  }

  increaseGoodFeedback = () => {
    this.setState({ good: this.state.good + 1 })
  }

  increaseNeutralFeedback = () => {
    this.setState({ neutral: this.state.neutral + 1 })
  }

  increaseBadFeedback = () => {
    this.setState({ bad: this.state.bad + 1 })
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <Feedback
            increaseGoodFeedback={this.increaseGoodFeedback}
            increaseNeutralFeedback={this.increaseNeutralFeedback}
            increaseBadFeedback={this.increaseBadFeedback}
          ></Feedback>
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    )
  }
}
