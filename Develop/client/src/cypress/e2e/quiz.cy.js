import { render} from '@testing-library/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    const { getByText } = render(<Quiz />);
    const quizTitle = getByText(/Quiz Title/i);
    expect(quizTitle).toBeInTheDocument();
  });

  it('displays the question and options', () => {
    const { getByText } = render(<Quiz />);
    const question = getByText(/What is your favorite color?/i);
    const option1 = getByText(/Red/i);
    const option2 = getByText(/Blue/i);
    expect(question).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    }
    );
})
