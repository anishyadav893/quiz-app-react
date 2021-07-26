import React from 'react';

type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionNo: number;
	numQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, numQuestions}) => (
		<div>
			<p className="number">
				Question: {questionNo} / {numQuestions}
			</p>
			<p dangerouslySetInnerHTML={{__html: question}} />
			<div>
				{answers.map(answer => (
						<div>
							<button disabled = {userAnswer} onClick = {callback}>
								<span dangerouslySetInnerHTML={{__html: answer}} />
							</button>
						</div>
					))}
			</div>
		</div>
	);

export default QuestionCard;