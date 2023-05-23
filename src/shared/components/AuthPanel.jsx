import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import LoginImg from '../../assets/images/login.png';

function AuthPanel({ onFinishLogin, onFinishSignup }) {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleSelectTab = (index) => {
		if (index !== selectedTab) setSelectedTab(index);
	};

	return (
		<div className=" flex gap-4">
			<div className="flex flex-col justify-center w-96">
				<img src={LoginImg} alt="Login image" />
			</div>
			<Tabs
				onSelect={handleSelectTab}
				selectedIndex={selectedTab}
				className="flex flex-col justify-center"
			>
				<TabList>
					<Tab>
						<div
							className={
								selectedTab === 0
									? 'text-blue-primary font-semibold text-lg'
									: ''
							}
						>
							Iniciar sesión
						</div>
					</Tab>
					<Tab>
						<div
							className={
								selectedTab === 1
									? 'text-blue-primary font-semibold text-lg'
									: ''
							}
						>
							Registrarse
						</div>
					</Tab>
				</TabList>
				<TabPanel className={selectedTab === 0 ? 'grow' : ''}>
					<LoginForm onFinish={onFinishLogin} />
				</TabPanel>
				<TabPanel className={selectedTab === 1 ? 'grow' : ''}>
					<SignupForm onFinish={onFinishSignup} />
				</TabPanel>
			</Tabs>
		</div>
	);
}

export default AuthPanel;
