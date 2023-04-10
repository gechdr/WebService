insert into `kategori_buku`(`id`,`nama`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Action',NOW(),NOW(),NULL),
(2,'Comedy',NOW(),NOW(),NULL),
(3,'Romance',NOW(),NOW(),NULL);

insert into `buku`(`id`,`nama`,`tahun_terbit`,`kategori_id`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Jojo',2022,1,NOW(),NOW(),NULL),
(2,'Harry Potter',2021,2,NOW(),NOW(),NULL),
(3,'Percy Jackson',2020,3,NOW(),NOW(),NULL),
(4,'Sherlock Holmes',2019,1,NOW(),NOW(),NULL),
(5,'The Lord of the Rings',2018,2,NOW(),NOW(),NULL),
(6,'Game of Thrones',2017,3,NOW(),NOW(),NULL),
(7,'House Of Dragon',2016,1,NOW(),NOW(),NULL),
(8,'Murder on the Orient Express',2015,2,NOW(),NOW(),NULL),
(9,'Attack on Titan',2015,3,NOW(),NOW(),NULL),
(10,'Death Note',2010,1,NOW(),NOW(),NULL),
(11,'Death on the Nile',2007,2,NOW(),NOW(),NULL),
(12,'The ABC Murders',2005,3,NOW(),NOW(),NULL);

insert into `pengguna`(`id`,`nama`,`gender`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'esther',0,NOW(),NOW(),NULL),
(2,'evan',1,NOW(),NOW(),NULL),
(3,'mimi',1,NOW(),NOW(),NULL);

insert into `toko`(`id`,`nama`,`pengguna_id`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Sumber Pinter',1,NOW(),NOW(),NULL),
(2,'Pokoke Lulus',2,NOW(),NOW(),NULL),
(3,'Buku Dimasak Diminum',3,NOW(),NOW(),NULL);

insert into `toko_buku`(`id`,`toko_id`,`buku_id`,`stok`,`created_at`,`updated_at`,`deleted_at`) values 
(1,1,1,11,NOW(),NOW(),NULL),
(2,1,3,13,NOW(),NOW(),NULL),
(3,1,5,15,NOW(),NOW(),NULL),
(4,2,2,22,NOW(),NOW(),NULL),
(5,2,4,24,NOW(),NOW(),NULL),
(6,2,6,26,NOW(),NOW(),NULL),
(7,3,1,31,NOW(),NOW(),NULL),
(8,3,5,35,NOW(),NOW(),NULL),
(9,3,2,32,NOW(),NOW(),NULL),
(10,3,4,34,NOW(),NOW(),NULL);