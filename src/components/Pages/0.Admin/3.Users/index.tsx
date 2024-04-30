import { UserTable } from "../2.NewUsers"
import { RightPanel } from "../2.NewUsers"

const UsersAdmin = () => {
	const styles = {
	container: 'pr-[300px] ',
	title: "font-bold text-2xl mb-7 ",

	}

	return (
		<section className={styles.container}>
			<div className="w-full ">
				
				<h2 className={styles.title}>New users:</h2>
				<UserTable />

			</div>
			<RightPanel isEditPanel={false} />
		</section>
	)
}

export default UsersAdmin