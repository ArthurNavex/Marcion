using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Marcion.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarEmailAoCliente : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CPF",
                table: "Clientes",
                newName: "Cpf");

            migrationBuilder.RenameColumn(
                name: "CEP",
                table: "Clientes",
                newName: "Cep");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Clientes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Clientes");

            migrationBuilder.RenameColumn(
                name: "Cpf",
                table: "Clientes",
                newName: "CPF");

            migrationBuilder.RenameColumn(
                name: "Cep",
                table: "Clientes",
                newName: "CEP");
        }
    }
}
