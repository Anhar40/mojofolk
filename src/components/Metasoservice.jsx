

export const SeoService = ({ SeoServices }) => (
    <>
        {SeoServices ? (
            <meta property="og:image" content={SeoServices} />
        ) : (
            <>
                <title>Mojo Folks - Layanan IT & Konsultasi</title>
                <meta name="description" content="Jelajahi layanan Mojo Folks: Konsultasikan kebutuhan perusahaan dan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda." />
                <meta name="keywords" content="Layanan IT Mataram, IT Consultant Lombok, IT Agency Lombok, Website Development NTB, Jasa IT Mataram, IT Developer Lombok, Mojo Folks Service" />
                <meta property="og:title" content="Mojo Folks - Layanan IT & Konsultasi" />
                <meta property="og:description" content="Solusi digital komprehensif dari perencanaan, pengembangan, hingga eksekusi digital untuk bisnis Anda." />
                <meta property="og:image" content="https://mojofolks.com/assets/img/grow-business.webp" />
                <meta property="og:url" content="https://mojofolks.com/service" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mojo Folks - Service IT & Digital Solution" />
                <meta name="twitter:description" content="Temukan layanan website development dan konsultasi IT profesional di Lombok & NTB." />
                <meta name="twitter:image" content="https://mojofolks.com/assets/img/grow-business.webp" />
            </>
        )}
    </>
);
export default SeoService;