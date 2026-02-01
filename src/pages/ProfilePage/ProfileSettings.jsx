import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../Store/MyStore';

function ProfileSettings() {
  const { t, i18n } = useTranslation();

  const { changeMode } = useAuthStore();

  function changeLanguage(event) {
    i18n.changeLanguage(event.target.value)
    localStorage.setItem("language", event.target.value);
  }

  return <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="theme">{t('Theme')}</InputLabel>
            <Select
              labelId="theme"
              label="theme"
              onChange={function (e) { changeMode(e.target.value) }}
            >
              <MenuItem value={"dark"}>{t('Dark')}</MenuItem>
              <MenuItem value={"light"}>{t('Light')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <InputLabel id="language">{t('Language')}</InputLabel>
            <Select
              labelId="language"
              label="language"
              onChange={changeLanguage}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"ar"}>العربية</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
  </>
}

export default ProfileSettings
