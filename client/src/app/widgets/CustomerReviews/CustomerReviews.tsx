import cls from './CustomerReviews.module.scss';
import { AppLink, Button, Form } from '../../shared/ui';

export const CustomerReviews = () => {
    return (
        <div className={cls.customer_reviews}>
            <div>
                <Button variant='muted2' width={187} height={60}>Description</Button>
                <Button variant='primary' width={187} height={60}>Reviews</Button>
            </div>

            <Form className={cls.reviews_body}>
                <div>
                    <span>Customer reviews</span>
                    <p>No reviews yet</p>
                    <AppLink className={cls.review_btn} to="/reviews">
                        Write a review
                    </AppLink>
                </div>
            </Form>
        </div>
    )
};