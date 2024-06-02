import { useState, useEffect } from "react";
import { DateTimePicker } from "@mantine/dates";
import {
  Group,
  Button,
  Flex,
  Autocomplete,
  Container,
  Title,
  rem,
  Input,
  Alert,
  Avatar,
  Text,
} from "@mantine/core";
import {
  IconMapPin,
  IconCalendar,
  IconInfoCircle,
  IconPackage,
  IconNotebook,
  IconBottle,
  IconAlertTriangle
} from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const dataLocal = [
  {
    bank_sampah: "Bank Sampah 1",
    item_sampah: "bottle ,cardboard, paper",
    location: "Suite 55",
  },
  {
    bank_sampah: "Bank Sampah 2",
    item_sampah: "paper, bottle",
    location: "PO Box 41613",
  },
  {
    bank_sampah: "Bank Sampah 3",
    item_sampah: "bottle",
    location: "PO Box 50058",
  },
  { bank_sampah: "Bank Sampah 4", item_sampah: "paper", location: "8th Floor" },
  {
    bank_sampah: "Bank Sampah 5",
    item_sampah: "paper, cardboard",
    location: "PO Box 57936",
  },
];




function DepositPenukaranPage() {
  const navigate = useNavigate();
  
  const [ambilSendiri, setAmbilSendiri] = useState<any[]>([]);
  const [selectedBankSampah, setSelectedBankSampah] = useState("");
  const [showAlertBankSampahPoint, setShowAlertBankSampahPoint] = useState(false);
  const [bankSampah, setBankSampah] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");



  const validationSchema = Yup.object().shape({
    ambilSendiri: Yup.date().required('Silahkan memilih tanggal dan jam').nullable(),
  });

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const values = { bankSampah: selectedBankSampah };
    validationSchema.validate(values).then(() => {
      navigate('/konfirmasi-penukaran');
    }).catch((error) => {
      setShowAlertBankSampahPoint(true);
    });
  };

  useEffect(() => {
    setAmbilSendiri(dataLocal);
  }, []);

  const IconCalendarInput = (
    <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const IconMap = (
    <IconMapPin
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );

  const IconInfo = (
    <IconInfoCircle
      stroke={2}
      style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
    />
  );



  // handleClose Allert
  const [showAlert, setShowAlert] = useState(true);
  const handleCloseAlert = () => setShowAlert(false);

  // Fetch nama bank sampah dari data local
  useEffect(() => {
    setBankSampah(dataLocal);
  }, []);

  // Fungsi untuk melakukan pencarian
  const filteredBankSampah = bankSampah
    .map((item) => item.bank_sampah)
    .filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="setor-sampah">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600}>
          Metode Setor
        </Title>
      </Container>
      <Flex className="main" direction="column" mt="1.5rem" mb="5rem">
      <form onSubmit={handleSubmit}>
      {showAlertBankSampahPoint && (
            <Alert
              className="alert"
              mb="sm"
              variant="light"
              color="red"
              radius="md"
              withCloseButton
              title="Perhatian!"
              icon={<IconAlertTriangle />}
              onClose={() => setShowAlertBankSampahPoint(false)}
              lh="1rem"
              
            >
              Silahkan untuk memilih tanggal dan jam terlebih dahulu.
            </Alert>
          )}
        <DateTimePicker
          rightSection={IconCalendarInput}
          rightSectionPointerEvents="none"
          label="Ambil sendiri"
          description="Masukkan tanggal dan jam saat menyetorkan sampah."
          withAsterisk
          onChange={(value) => {
            setSelectedBankSampah(value);
          }}
          error={showAlertBankSampahPoint}
          styles={{
            input: {
              borderColor: showAlertBankSampahPoint ? 'red' : undefined,
              '&:focus': {
                borderColor: showAlertBankSampahPoint ? 'red' : undefined,
              },
            },
          }}
        />

        {showAlert && (
          <Alert
            className="alert"
            my="xs"
            variant="light"
            color="blue"
            radius="md"
            withCloseButton
            title="Perhatian!"
            icon={IconInfo}
            onClose={handleCloseAlert}
            lh="1rem"
          >
            Layanan antar ke rumah belum tersedia di bank sampah ini.
          </Alert>
        )}

        <Autocomplete
          className="InputSampah"
          disabled
          label="Antar ke rumah"
          description="Masukkan alamat rumah Anda."
          rightSectionPointerEvents="none"
          rightSection={IconMap}
          comboboxProps={{ shadow: "md" }}
          withAsterisk
        />

        <Container
          bg="white"
          h="5rem"
          display="flex"
          bottom={0}
          left={0}
          right={0}
          className="navigation"
          mt="1rem"
          style={{ zIndex: 10 }}
        >
          <Group
            grow
            className="NavigationGroup"
            display="flex"
            justify="center"
            align="center"
          >
            <Button
              className="NavigationBtn"
              variant="outline"
              color="#416835"
              radius="md"
              size="md"
              w="8rem"
              fullWidth
              >
              Kembali
            </Button>
            <Button
              type="submit"
              className="NavigationBtn"
              variant="filled"
              color="#416835"
              radius="md"
              size="md"
              w="8rem"
              fullWidth
            >
              Selanjutnya
            </Button>
          </Group>
        </Container>
      </form>
      </Flex>
    </div>
  );
}

export default DepositPenukaranPage;
