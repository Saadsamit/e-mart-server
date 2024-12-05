-- CreateTable
CREATE TABLE "book" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("bookId")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_title_key" ON "book"("title");
