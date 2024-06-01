import { useState, useEffect } from "react";
import {
  Flex,
  Autocomplete,
  Container,
  Title,
  rem,
  Alert,
} from "@mantine/core";
import {
  IconMapPin,
  IconInfoCircle,
  IconCalendar,
} from "@tabler/icons-react";
import { DatePickerInput, DatePicker } from "@mantine/dates";

function DepositPage() {
  const IconMap = (
    <IconMapPin stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />
  );
  const IconInfo = (
    <IconInfoCircle stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />
  );

  const [searchValue, setSearchValue] = useState("");
  const [bankSampah, setBankSampah] = useState<any[]>([]);

  const [showAlert, setShowAlert] = useState(true);
  const [dateValue, setDateValue] = useState<Date | null>(null);

  const handleCloseAlert = () => setShowAlert(false);
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  
  const dataLocal = [
    { bank_sampah: "Bank Sampah 1", item_sampah: "bottle ,cardboard, paper", location: "Suite 55" },
    { bank_sampah: "Bank Sampah 2", item_sampah: "paper, bottle", location: "PO Box 41613" },
    { bank_sampah: "Bank Sampah 3", item_sampah: "bottle", location: "PO Box 50058" },
    { bank_sampah: "Bank Sampah 4", item_sampah: "paper", location: "8th Floor" },
    { bank_sampah: "Bank Sampah 5", item_sampah: "paper, cardboard", location: "PO Box 57936" },
  ];

  const filteredBankSampah = bankSampah.map((item) => item.bank_sampah).filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    setBankSampah(dataLocal);
  },[]);

  return (
    <div className="setor-sampah">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600} size="xl">
          Metode Setor
        </Title>
      </Container>   

      <Flex className="main" direction="column" mt="1.5rem" mb="5rem">
      <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />

      {showAlert && (
          <Alert
            className="alert"
            mt="sm"
            variant="light"
            color="blue"
            radius="md"
            withCloseButton
            title="Perhatian!"
            icon={IconInfo}
            onClose={handleCloseAlert}
          >
            Layanan penjemputan sampah belum tersedia di bank sampah ini.
          </Alert>
        )}

        <Autocomplete
          className="InputSampah"
          label="Bank sampah point"
          description="Pilih bank sampah tujuan Anda."
          data={filteredBankSampah}
          value={searchValue}
          onChange={setSearchValue}
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
          {/* Navigation buttons or other content can go here */}
        </Container>
      </Flex>
    </div>
  );
}

export default DepositPage;
