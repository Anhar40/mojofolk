

export const MetaImage = ({ customImage }) => (
    <>
        {customImage ? (
            <meta property="og:image" content={customImage} />
        ) : (
            <>
                <title>Mojo Folks - IT Agency</title>
                <meta property="og:title" content="Mojo Folks - IT Agency" />
                <meta property="og:description" content="Jelajahi layanan Mojo Folks: Konsultasikan kebutuhan perusahaan dan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda." />
                <meta property="og:image" content="https://mojofolks.com/assets/img/digital era.webp" />
                <meta property="og:url" content="https://mojofolks.com/" />
                <meta property="og:type" content="website" />
            </>
        )}
    </>
);
export default MetaImage;