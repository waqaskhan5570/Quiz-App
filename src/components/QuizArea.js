import React from 'react'

import AnswerList from './AnswerList';
import FailedGreeting from './FailedGreeting';
import Question from './Question';
import UserGreeting from './UserGreeting';


function QuizArea(props) {
    if(props.isFinished ){
        if(props.correct >=2){
            return <UserGreeting/>
        }
        else{
            return <FailedGreeting/>
        }
    }

    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick ={props.handleClick} dataSet={props.dataSet} />
        
        </div>
    )
}

export default QuizArea;
