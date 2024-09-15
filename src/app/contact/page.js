import TextBlock from "@/components/TextBlock/page";
import styles from "@/styles/contact.module.css";

export default function Contact() {
	return (
		<div className={styles.contactPage}>
			<TextBlock
				heading='Contact Me'
				content='If you have any questions, need help with a project, or want to collaborate, please fill out the contact form below or reach out to me via email.'
			/>
			<form action='/send-email' method='POST' className={styles.formContainer}>
				<div className={styles.formGroup}>
					<label htmlFor='name' className={styles.formLabel}>
						Name:
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className={styles.formInput}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='email' className={styles.formLabel}>
						Email:
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						className={styles.formInput}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='message' className={styles.formLabel}>
						Message:
					</label>
					<textarea
						id='message'
						name='message'
						required
						className={styles.formTextarea}
					/>
				</div>
				<button type='submit' className={styles.submitButton}>
					Send
				</button>
			</form>
		</div>
	);
}
