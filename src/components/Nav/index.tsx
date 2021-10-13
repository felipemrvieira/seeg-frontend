import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { logout } from '../../services/auth';

import { LogoContainer, Logo, NavbarWrapper, Link } from './styles';

function sair() {
	logout();
	window.location.reload();
}

const MainNavbar: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	return (
		<>
			<NavbarWrapper>
				<Navbar bg="white" expand="lg">
					<Container fluid>
						<Navbar.Brand href="/">
							<LogoContainer>
								<Logo />
							</LogoContainer>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to="/solutions">
									Emissões
								</Nav.Link>
								<Nav.Link as={Link} to="/solutions">
									Totais
								</Nav.Link>

								<NavDropdown title="Setor" id="basic-nav-dropdown">
									<NavDropdown.Item as={Link} to="/admin/solutions">
										Listar Soluções
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/admin/solutions/new">
										Cadastrar Soluções
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link as={Link} to="/solutions">
									Atividades Econômica
								</Nav.Link>
								<Nav.Link as={Link} to="/solutions">
									Estado
								</Nav.Link>
								<NavDropdown title="Município" id="basic-nav-dropdown">
									<NavDropdown.Item as={Link} to="/admin/solutions">
										Listar Soluções
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/admin/solutions/new">
										Cadastrar Soluções
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link as={Link} to="/solutions">
									Soluções
								</Nav.Link>
								<NavDropdown title="Biblioteca" id="basic-nav-dropdown">
									<NavDropdown.Item as={Link} to="/admin/solutions">
										Listar Soluções
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/admin/solutions/new">
										Cadastrar Soluções
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown title="Downloads" id="basic-nav-dropdown">
									<NavDropdown.Item as={Link} to="/admin/solutions">
										Listar Soluções
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/admin/solutions/new">
										Cadastrar Soluções
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							Você deseja sair?
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Selecione a opção Sair abaixo se você quer encerrar a sua sessão
						atual.
					</Modal.Body>
					<Modal.Footer>
						<button
							onClick={() => setShowModal(false)}
							className="btn btn-secondary"
							type="button"
							data-dismiss="modal"
						>
							Cancel
						</button>
						<button type="button" className="btn btn-primary" onClick={sair}>
							Sair
						</button>
					</Modal.Footer>
				</Modal>
			</NavbarWrapper>
		</>
	);
};

export default MainNavbar;
