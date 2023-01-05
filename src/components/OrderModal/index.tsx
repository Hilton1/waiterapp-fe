import close from '../../assets/images/close-icon.svg';

import { Overlay, ModalBody } from './styles';

interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {
  if(!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type='button'>
            <img src={close} alt="Ícone de fechar" />
          </button>
        </header>
      </ModalBody>
    </Overlay>
  );
}
