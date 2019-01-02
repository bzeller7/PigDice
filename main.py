import pyodbc 
# import pyodbc functionality

# Make sure there is no whitespace
# around the = signs
# Getting a connection to our AP database
# Using Windows Auth
con = pyodbc.connect("""
        DRIVER={ODBC Driver 13 for SQL Server};
        SERVER=localhost;
        DATABASE=CPW210_AP;
        Trusted_Connection=yes;
        """)