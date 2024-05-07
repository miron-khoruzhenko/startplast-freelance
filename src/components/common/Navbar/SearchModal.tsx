import Button, { EmptyButton } from "../Button"
import BlockInput from "../InputBlock"
import { Modal } from "../popups/Popups"


const SearchModal = (
	{ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }
) => {
	const styles = {
		container: '',
	}

	return (
		<Modal className={styles.container} isOpen={isOpen} setIsOpen={setIsOpen} modalClassName="!h-auto" >
			<BlockInput placeholder="Search" label="What you want to find?"  />
			<div className="flex gap-4">
				<Button className="w-full">Search</Button>
				<EmptyButton onClick={()=>setIsOpen(false)} className="w-full bg-red-500 text-white">Close</EmptyButton>
			</div>
		</Modal>
	)
}

export default SearchModal