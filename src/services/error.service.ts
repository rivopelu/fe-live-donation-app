import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth.ts';

export default class ErrorService {
  private auth = useAuth();

  private handleSnackbar(message: string) {
    toast.error(message);
  }

  public fetchApiError(error: any) {
    console.log('Full error:', error);

    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 401) {
          alert('MASUK');
          this.auth.logOut();
          return;
        }
        const message = error.response.data?.message || 'Terjadi Kesalahan Pada Sistem';
        this.handleSnackbar(message);
      } else if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        this.handleSnackbar('Tidak dapat terhubung ke server. Periksa server backend dan koneksi jaringan Anda.');
      } else if (error.request) {
        this.handleSnackbar('Tidak ada respon dari server. Periksa koneksi jaringan.');
      } else {
        this.handleSnackbar('Kesalahan dalam mengirim permintaan.');
      }
    } else {
      this.handleSnackbar(String(error));
    }
  }
}
