# Reçete Paylaşım Platformu Kurulum Rehberi

Bu rehber, Reçete Paylaşım Platformu'nun nasıl kurulacağını adım adım açıklamaktadır.

## Gereksinimler

- Node.js'in en son sürümü yüklü olmalıdır.
- Bir veritabanı sunucusuna ihtiyaç vardır (örneğin, MySQL veya PostgreSQL).

## Adımlar

1. Bu GitHub deposunu bilgisayarınıza indirin veya klonlayın.
2. İndirdiğiniz klasöre gidin.
3. Gerekli dosyaları ve kodları düzenleyin veya özelleştirin (isteğe bağlı).
4. Veritabanı bağlantısı oluşturun:
   - Veritabanı sunucusunda yeni bir veritabanı oluşturun.
   - `server.js` dosyasını açın ve veritabanı bağlantı bilgilerini güncelleyin.
5. Tablo yapısını oluşturun:
   - Proje klasöründe terminal açın.
   - Aşağıdaki komutu çalıştırarak `database.sql` dosyasını kullanarak tablo yapısını oluşturun:
     ```
     mysql -u kullanici_adi -p veritabani_adi < database.sql
     ```
     Not: `kullanici_adi` ve `veritabani_adi`'nı kendi veritabanı bilgilerinizle değiştirin.
6. Bağımlılıkları yükleyin:
   - Terminalde proje klasöründe aşağıdaki komutu çalıştırın:
     ```
     npm install
     ```
7. Sunucuyu başlatın:
   - Terminalde proje klasöründe aşağıdaki komutu çalıştırın:
     ```
     node server.js
     ```
8. Tarayıcınızda `http://localhost:3000` adresini açarak uygulamayı görüntüleyin.

Notlar:
- Gerekirse, dosyaları ve kodları düzenleyerek uygulamayı özelleştirebilirsiniz.
- Veritabanı sunucusu olarak farklı bir seçenek kullanmak isterseniz, `server.js` dosyasındaki bağlantı ayarlarını güncelleyin.
- Sunucu varsayılan olarak `3000` portunda çalışacaktır. Portu değiştirmek isterseniz, `server.js` dosyasında port ayarını güncelleyin.
- Daha fazla bilgi ve özelleştirme seçenekleri için README.md dosyasını inceleyin.
