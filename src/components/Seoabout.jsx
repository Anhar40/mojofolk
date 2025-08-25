

export const Seoabout = ({ Seoabouts }) => (
    <>
        {Seoabouts ? (
            <meta property="og:image" content={Seoabouts} />
        ) : (
            <>
                <title>Mojo Folks - Tentang Kami IT Agency</title>
                <meta name="description" content="Kenali Mojo Folks, IT Agency dari Mataram - Bima yang berfokus pada solusi digital kreatif, konsultasi IT, dan pengembangan sistem digital profesional." />
                <meta name="keywords" content="Tentang Mojo Folks, IT Agency Lombok, Konsultan IT Mataram, Website Developer NTB, Digital Agency NTB,  Website Developer Mataram, Jasa Pembuatan Website Mataram dan Bima" />

                {/* Open Graph */}
                <meta property="og:title" content="Mojo Folks - Tentang Kami" />
                <meta property="og:description" content="Mojo Folks, IT Agency di Lombok, siap mendukung bisnis dengan solusi digital dan konsultasi IT yang inovatif." />
                <meta property="og:image" content="https://mojofolks.com/assets/img/kreatifteam.webp" />
                <meta property="og:url" content="https://mojofolks.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mojo Folks - Tentang Kami" />
                <meta name="twitter:description" content="Profesional IT Agency dari Lombok yang berfokus pada inovasi digital dan layanan website." />
                <meta name="twitter:image" content="https://mojofolks.com/assets/img/kreatifteam.webp" />
            </>
        )}
    </>
);
export default Seoabout;