import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius:4,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsWrapper: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  closeButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  closeButtonText: {
    color: colors.textPrimary,
  },
  confirmButtonWrapper: {
    border: 'none',
    borderColor: colors.textPrimary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    backgroundColor: colors.bgPrimary,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: colors.white
  },
  validationText: {
    color: colors.danger,
    marginLeft: 20,
  }
});

export default styles;
